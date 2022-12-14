import { connect } from "../config/db.config";
import {
  UserManagement,
  IUserManagement,
} from "../models/userManagement.model";

export class UserManagementRepository {
  private db: any = {};
  private userManagementRepository: any;

  constructor() {
    this.db = connect();
    this.db.Sequelize.sync({})
      .then(() => {
        console.log("Sync db.");
      })
      .catch((err: { message: string }) => {
        console.log("Failed to sync db: " + err.message);
      });
    this.userManagementRepository =
      this.db.Sequelize.getRepository(UserManagement);
  }

  async getAllUserManagements(): Promise<IUserManagement[]> {
    let data = [];
    try {
      data = await this.userManagementRepository.findAll();
    } catch (err) {
      throw new Error("Failed to get user managements." || err);
    }
    return data;
  }

  async findUserManagementByUserId(userId: number): Promise<IUserManagement[]> {
    let data = [];
    try {
      data = await this.userManagementRepository.findAll({
        where: {
          user_id: userId,
        },
      });
    } catch (err) {
      throw new Error("Failed to find user managements." || err);
    }
    return data;
  }
}
