import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { InsightController } from "./controllers/insights.controller";
import { UserManagementController } from "./controllers/user_management.controller";

// config
dotenv.config();
const port = process.env.PORT || 8082;
const app = express();

app.use(express.json());
app.use(cors());

// controllers
const insightController = new InsightController();
const userManagementController = new UserManagementController();

// routes

// insights
app.get("/api/insights", async (req, res) => {
    insightController.getAllInsights(req, res);
});

app.post("/api/insight", async (req, res) => {
    insightController.createInsight(req, res);
});

app.put("/api/insight", async (req, res) => {
    insightController.updateInsight(req, res);
});

app.delete("/api/insight/:id", async (req, res) => {
    insightController.deleteInsight(req, res);
});

// user management
app.get("/api/user_managements", async (req, res) => {
    userManagementController.getAllUserManagements(req, res);
});

app.get("/api/user_management/:id", async (req, res) => {
    userManagementController.findUserManagementByUserId(req, res);
});

// port listen
app.listen(port, () => {
    console.log(`Server is running on port: http://localhost:${port}`);
});

export default app;