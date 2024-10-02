export class PrismaServiceMock {
    constructor(modelNames: string[]) {
        modelNames.forEach(model => {
            console.log(model)
        });
    }

    db = {
        findAll: jest.fn(),
        findUnique: jest.fn(),
        findMany: jest.fn()
    }
}