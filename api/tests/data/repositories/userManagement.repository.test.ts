import { UserManagementRepository } from "../../../data/repositories/userManagement.repository";
import { UserManagement, IUserManagement } from "../../../data/models/userManagement.model";

describe('UserManagementRepository', () => {
    const userManagementRepository = new UserManagementRepository();

    beforeEach(() => {
        jest.resetAllMocks();
    });

    describe('UserManagementRepository.getAllUserManagements', () => {
        it('should fetch all user managements when there is data in the database', async () => {
            // Given
            const mockResponse: IUserManagement[] = [
                {
                    userId: 1,
                    firstName: 'Martin',
                    lastName: 'James',
                    email: 'martinjames@cardiff.ac.uk',
                    organisation: 'Cardiff University',
                    noSitesManaged: 3,
                    role: 'director of estates'
                },
                {
                    userId: 2,
                    firstName: 'Rhy',
                    lastName: 'Jones',
                    email: 'rhyjones@cardiff.ac.uk',
                    organisation: 'Cardiff University',
                    noSitesManaged: 1,
                    role: 'facility energy manager'
                },
                {
                    userId: 3,
                    firstName: 'James',
                    lastName: 'Ohay',
                    email: 'jamesohay@cardiff.ac.uk',
                    organisation: 'Cardiff University',
                    noSitesManaged: 3,
                    role: 'facility energy manager'
                }
            ];
            UserManagement.findAll = jest.fn().mockResolvedValue(mockResponse);

            // When
            const result = await userManagementRepository.getAllUserManagements();

            // Then
            expect(result).toEqual(mockResponse);
            expect(UserManagement.findAll).toHaveBeenCalledTimes(1);
            expect(UserManagement.findAll).toHaveBeenCalledWith();
        });

        it('should not fetch user management data when there is no data in the database', async () => {
            // Given 
            // When
            const mErrorMessage = new Error("Failed to fetch all user managements.");
            userManagementRepository.getAllUserManagements = jest.fn().mockRejectedValue(mErrorMessage);
            
            // Then
            expect(userManagementRepository.getAllUserManagements).rejects.toMatchObject(mErrorMessage);
            expect(userManagementRepository.getAllUserManagements).toHaveBeenCalledTimes(1);
            expect(userManagementRepository.getAllUserManagements).toHaveBeenCalledWith();
        });
    });

    describe('UserManagementRepository.findUserManagementByUserId', () => {
        it('should find user management when Id is provided', async () => {
            // Given
            const userId = 1;
            const mockResponse: IUserManagement = {
                    userId: 1,
                    firstName: 'Martin',
                    lastName: 'James',
                    email: 'martinjames@cardiff.ac.uk',
                    organisation: 'Cardiff University',
                    noSitesManaged: 3,
                    role: 'director of estates'
                }
            
            UserManagement.findAll = jest.fn().mockResolvedValue(mockResponse);

            // When
            const result = await userManagementRepository.findUserManagementByUserId(userId);

            // Then
            expect(result).toEqual(mockResponse);
            expect(UserManagement.findAll).toHaveBeenCalledTimes(1);
            expect(UserManagement.findAll).toBeCalledWith({
                where: {
                    user_id: userId
                }
            });
        });

        it('should not find user managements when there is no Id provided', async () => {
            // Given 
            // When
            const mErrorMessage = new Error("Failed to find user managements.");
            userManagementRepository.findUserManagementByUserId = jest.fn().mockRejectedValue(mErrorMessage);
            
            // Then
            expect(userManagementRepository.findUserManagementByUserId).rejects.toMatchObject(mErrorMessage);
            expect(userManagementRepository.findUserManagementByUserId).toHaveBeenCalledTimes(1);
            expect(userManagementRepository.findUserManagementByUserId).toHaveBeenCalledWith();
        });
    }); 

    
});