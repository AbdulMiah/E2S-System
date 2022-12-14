import { Request, Response } from "express";
import { SiteService } from "../services/sites.service";

export class SiteController {
    private siteService: SiteService;

    constructor() {
        this.siteService = new SiteService();
    }

    async createSite(req: Request, res: Response): Promise<any> {
        return this.siteService
            .createSite(req.body)
            .then((data) => {
                res.status(201).json({
                    message: "Created",
                    status: 201,
                    data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    message:
                        err.message || "server error: failed to create site.",
                    status: 500,
                });
            });
    }

    async deleteSite(req: Request, res: Response): Promise<any> {
        return this.siteService
            .deleteSite(parseInt(req.params.id))
            .then((data) => {
                res.status(202).json({
                    message: `Successfully deleted 1 record.`,
                    status: 202,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    message:
                        err.message || "server error: failed to delete site.",
                    status: 500,
                });
            });
    }

    async getAllSites(req: Request, res: Response): Promise<any> {
        return this.siteService
            .getAllSites()
            .then((data) => {
                res.status(200).json({
                    message: "Success",
                    status: 200,
                    data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    message:
                        err.message || "server error: failed to fetch sites.",
                    status: 500,
                });
            });
    }

    async updateSite(req: Request, res: Response): Promise<any> {
        return this.siteService
            .updateSite(req.body)
            .then((data) => {
                res.status(200).json({
                    message: `Successfully updated 1 record.`,
                    status: 200,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    message:
                        err.message || "server error: failed to update site.",
                    status: 500,
                });
            });
    }

    async findSiteById(req: Request, res: Response): Promise<any> {
        return this.siteService
            .findSiteById(parseInt(req.params.id))
            .then((data) => {
                res.status(200).json({
                    message: "Success",
                    status: 200,
                    data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    message:
                        err.message ||
                        "server error: failed to fetch site by Id.",
                    status: 500,
                });
            });
    }

    async findSitesByOrgId(req: Request, res: Response): Promise<any> {
        return this.siteService
            .findSitesByOrgId(parseInt(req.params.orgId))
            .then((data) => {
                res.status(200).json({
                    message: "Success",
                    status: 200,
                    data,
                });
            })
            .catch((err) => {
                res.status(500).json({
                    message:
                        err.message ||
                        "server error: failed to fetch site by org id.",
                    status: 500,
                });
            });
    }
}
