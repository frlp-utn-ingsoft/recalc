import { test, expect } from '@playwright/test';
import { seed } from '../src/seed.js';
import { Operation, History } from '../src/models.js'

test.describe('test', () => {
    test.describe.configure({ mode: 'serial' });

    test.beforeEach(async() => {
        await seed();
    })

    test('Deberia tener como titulo de pagina recalc', async({ page }) => {
        await page.goto('./');

        // Expect a title "to contain" a substring.
        await expect(page).toHaveTitle(/recalc/i);
    });

    test('Deberia poder realizar una division', async({ page }) => {
        await page.goto('./');

        await page.getByRole('button', { name: '6' }).click()
        await page.getByRole('button', { name: '/' }).click()
        await page.getByRole('button', { name: '3' }).click()

        const [response] = await Promise.all([
            page.waitForResponse((r) => r.url().includes('/api/v1/div/')),
            page.getByRole('button', { name: '=' }).click()
        ]);

        const { result } = await response.json();
        expect(result).toBe(2);

        await expect(page.getByTestId('display')).toHaveValue(/2/)

        const operation = await Operation.findOne({
            where: {
                name: "DIV"
            }
        });

        const historyEntry = await History.findOne({
            where: { OperationId: operation.id }
        })

        expect(historyEntry.firstArg).toEqual(6)
        expect(historyEntry.secondArg).toEqual(3)
        expect(historyEntry.result).toEqual(2)
    });

    test('Deberia arrojar un error al dividir por cero', async({ page }) => {
        await page.goto('./');

        await page.getByRole('button', { name: '5' }).click()
        await page.getByRole('button', { name: '/' }).click()
        await page.getByRole('button', { name: '0' }).click()

        const [response] = await Promise.all([
            page.waitForResponse((r) => r.url().includes('/api/v1/div/')),
            page.getByRole('button', { name: '=' }).click()
        ]);

        const { error } = await response.json();
        expect(error).toBe("No se puede dividir por cero");

        await expect(page.getByTestId('display')).toHaveValue("No se puede dividir por cero")

    });

    test('Deberia poder realizar una resta', async({ page }) => {
        await page.goto('./');

        await page.getByRole('button', { name: '7' }).click()
        await page.getByRole('button', { name: '9' }).click()
        await page.getByRole('button', { name: '-' }).click()
        await page.getByRole('button', { name: '9' }).click()

        const [response] = await Promise.all([
            page.waitForResponse((r) => r.url().includes('/api/v1/sub/')),
            page.getByRole('button', { name: '=' }).click()
        ]);

        const { result } = await response.json();
        expect(result).toBe(70);

        await expect(page.getByTestId('display')).toHaveValue(/70/)

        const operation = await Operation.findOne({
            where: {
                name: "SUB"
            }
        });

        const historyEntry = await History.findOne({
            where: { OperationId: operation.id }
        })

        expect(historyEntry.firstArg).toEqual(79)
        expect(historyEntry.secondArg).toEqual(9)
        expect(historyEntry.result).toEqual(70)
    });

    test('Deberia poder realizar una suma', async({ page }) => {
        await page.goto('./');

        await page.getByRole('button', { name: '5' }).click()
        await page.getByRole('button', { name: '5' }).click()
        await page.getByRole('button', { name: '+' }).click()
        await page.getByRole('button', { name: '5' }).click()

        const [response] = await Promise.all([
            page.waitForResponse((r) => r.url().includes('/api/v1/add/')),
            page.getByRole('button', { name: '=' }).click()
        ]);

        const { result } = await response.json();
        expect(result).toBe(60);

        await expect(page.getByTestId('display')).toHaveValue(/60/)

        const operation = await Operation.findOne({
            where: {
                name: "ADD"
            }
        });

        const historyEntry = await History.findOne({
            where: { OperationId: operation.id }
        })

        expect(historyEntry.firstArg).toEqual(55)
        expect(historyEntry.secondArg).toEqual(5)
        expect(historyEntry.result).toEqual(60)
    });

    test('No debería mostrar “undefined” cuando se hace click en el botón “=”', async({ page }) => {
        await page.goto('./');

        await page.getByRole('button', { name: '=' }).click();

        //Verifica que el display esté vacío  
        await expect(page.getByTestId('display')).toBeEmpty();
    });

    test('Deberia poder realizar una multiplicacion', async({ page }) => {
        await page.goto('./');

        await page.getByRole('button', { name: '1' }).click()
        await page.getByRole('button', { name: '0' }).click()
        await page.getByRole('button', { name: '*' }).click()
        await page.getByRole('button', { name: '6' }).click()

        const [response] = await Promise.all([
            page.waitForResponse((r) => r.url().includes('/api/v1/mul/')),
            page.getByRole('button', { name: '=' }).click()
        ]);

        const { result } = await response.json();
        expect(result).toBe(60);

        await expect(page.getByTestId('display')).toHaveValue(/60/)

        const operation = await Operation.findOne({
            where: {
                name: "MUL"
            }
        });

        const historyEntry = await History.findOne({
            where: { OperationId: operation.id }
        })

        expect(historyEntry.firstArg).toEqual(10)
        expect(historyEntry.secondArg).toEqual(6)
        expect(historyEntry.result).toEqual(60)
    });


    test('Deberia poder realizar una potencia', async({ page }) => {
        await page.goto('./');

        await page.getByRole('button', { name: '6' }).click()
        await page.getByRole('button', { name: '^' }).click()
        await page.getByRole('button', { name: '2' }).click()

        const [response] = await Promise.all([
            page.waitForResponse((r) => r.url().includes('/api/v1/pow/')),
            page.getByRole('button', { name: '=' }).click()
        ]);

        const { result } = await response.json();
        expect(result).toBe(36);

        await expect(page.getByTestId('display')).toHaveValue(/36/)

        const operation = await Operation.findOne({
            where: {
                name: "POW"
            }
        });

        const historyEntry = await History.findOne({
            where: { OperationId: operation.id }
        })

        expect(historyEntry.firstArg).toEqual(6)
        expect(historyEntry.secondArg).toEqual(2)
        expect(historyEntry.result).toEqual(36)
    });

    test('Deberia arrojar un error al obtener un resultado mayor a 100.000', async({ page }) => {
        await page.goto('./');

        await page.getByRole('button', { name: '5' }).click()
        await page.getByRole('button', { name: '5' }).click()
        await page.getByRole('button', { name: '^' }).click()
        await page.getByRole('button', { name: '5' }).click()

        const [response] = await Promise.all([
            page.waitForResponse((r) => r.url().includes('/api/v1/pow/')),
            page.getByRole('button', { name: '=' }).click()
        ]);

        const { error } = await response.json();
        expect(error).toBe("No se puede obtener un resultado tan grande");

        await expect(page.getByTestId('display')).toHaveValue("No se puede obtener un resultado tan grande")

    });


    test('Deberia poder realizar una raíz cuadrada', async({ page }) => {
        await page.goto('./');

        await page.getByRole('button', { name: '2' }).click()
        await page.getByRole('button', { name: '5' }).click()
        await page.getByRole('button', { name: '√' }).click()

        const [response] = await Promise.all([
            page.waitForResponse((r) => r.url().includes('/api/v1/sqr/')),
        ]);

        const { result } = await response.json();
        expect(result).toBe(5);

        await expect(page.getByTestId('display')).toHaveValue(/5/)

        const operation = await Operation.findOne({
            where: {
                name: "SQR"
            }
        });

        const historyEntry = await History.findOne({
            where: { OperationId: operation.id }
        })

        expect(historyEntry.firstArg).toEqual(25)
        expect(historyEntry.secondArg).toEqual(null)
        expect(historyEntry.result).toEqual(5)
    });

})