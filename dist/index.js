"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_route_1 = __importDefault(require("./route/index.route"));
const globalErrorHandler_1 = __importDefault(require("./middleware/globalErrorHandler"));
const app = (0, express_1.default)();
const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 8000;
app.use(globalErrorHandler_1.default);
app.use(express_1.default.json());
// const uploadsPath = path.join(__dirname, '../uploads');
// app.use('/uploads', express.static(uploadsPath));
app.get('/', (req, res) => {
    res.send('Welcome to the Book Catalog Backend API!');
});
app.use('/api/v1/', index_route_1.default);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
