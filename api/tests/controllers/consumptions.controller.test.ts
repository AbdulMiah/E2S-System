import { ConsumptionController } from "../../controllers/consumptions.controller";
import { IConsumption } from "../../data/models/consumptions.model";
import { ConsumptionService } from "../../services/consumptions.service";

jest.mock('../../services/consumptions.service', () => {
    const mConsumptionService = { 
        createConsumption: jest.fn(),
        getAllConsumptions: jest.fn(),
    };
    return {
        ConsumptionService: jest.fn(() => mConsumptionService)
    };
});

describe("ConsumptionController", () => {    
    const service = new ConsumptionService();
    const controller = new ConsumptionController();
    const mockDateObject = new Date("2021-02-26T20:42:16.652Z");

    const mRequest = (body?: any, params?: any) => {
        const req: any = {};
        req.body = jest.fn().mockReturnValue(body || req);
        req.params = jest.fn().mockReturnValue(params || req);
        return req;
    };
    const mResponse = () => {
        const res: any = {};
        res.status = jest.fn().mockReturnValue(res);
        res.json = jest.fn().mockReturnValue(res);
        return res;
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe("ConsumptionController.createConsumption", () => {
        const mCreateBody: IConsumption = {
            consumption_id: 4,
            time_interval: mockDateObject,
            heat_demand: 2897,
            electricity_demand: 2699,
            electricity_price: 98,
            gas_price: 65,
            site_id: 11,
            org_id: 11
        };
        const mSuccessReponse: any = {
            message: 'Created',
            status: 201,
            data: mCreateBody
        };
        const mFailResponse: any = {
            message: "server error: failed to create a consumption.",
            status: 500
        };

        it('should create a consumption when request body is provided', async () => {
            // Given
            const req = mRequest(mCreateBody);
            const res = mResponse();
            const createSpy = jest
                .spyOn(service, 'createConsumption')
                .mockResolvedValue(mCreateBody);

            // When
            await controller.createConsumption(req, res);

            // Then
            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith(mSuccessReponse);

            expect(createSpy).toHaveBeenCalledTimes(1);
            expect(createSpy.mock.results[0].value).toEqual(Promise.resolve(mCreateBody));
        });

        it('should not create a consumption when request body is not provided', async () => {
            // Given
            const req = mRequest();
            const res = mResponse();
            const createSpy = jest
                .spyOn(service, 'createConsumption')
                .mockRejectedValue({});

            // When
            await controller.createConsumption(req, res);

            // Then
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith(mFailResponse);

            expect(createSpy).toHaveBeenCalledTimes(1);
        });
    });

    describe("ConsumptionController.getAllConsumptions", () => {
        const mConsumption: IConsumption[] = [
            {
                consumption_id: 1,
                time_interval: mockDateObject,
                heat_demand: 2897,
                electricity_demand: 2699,
                electricity_price: 98,
                gas_price: 65,
                site_id: 1,
                org_id: 1
            },
            {
                consumption_id: 2,
                time_interval: mockDateObject,
                heat_demand: 2513,
                electricity_demand: 2450,
                electricity_price: 78,
                gas_price: 95,
                site_id: 5,
                org_id: 5
            },
            {
                consumption_id: 3,
                time_interval: mockDateObject,
                heat_demand: 2315,
                electricity_demand: 2216,
                electricity_price: 88,
                gas_price: 85,
                site_id: 8,
                org_id: 8
            }
        ];
        const mSuccessResponse: any = {
            message: 'Success',
            status: 200,
            data: mConsumption
        };
        const mFailResponse: any = {
            message: "server error: failed to fetch consumptions.",
            status: 500
        };

        it('should fetch all consumptions when there is data in the response', async () => {
            // Given
            const req = mRequest();
            const res = mResponse();
            const getSpy = jest
                .spyOn(service, 'getAllConsumptions')
                .mockResolvedValueOnce(mConsumption);

            // When
            await controller.getAllConsumptions(req, res);

            // Then
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith(mSuccessResponse);

            expect(getSpy).toHaveBeenCalledTimes(1);
            expect(getSpy).toHaveBeenCalledWith();
        });

        it('should not fetch consumptions when there is no data in the response', async () => {
            // Given
            const req = mRequest();
            const res = mResponse();
            const getSpy = jest
                .spyOn(service, 'getAllConsumptions')
                .mockRejectedValue({});

            // When
            await controller.getAllConsumptions(req, res);

            // Then
            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith(mFailResponse);

            expect(getSpy).toHaveBeenCalledTimes(1);
        });
    });
});