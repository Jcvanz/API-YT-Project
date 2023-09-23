"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videosRoutes = void 0;
const express_1 = require("express");
const VideosRepositories_1 = require("../modules/videos/repositories/VideosRepositories");
const login_1 = require("../middleware/login");
const videosRoutes = (0, express_1.Router)();
exports.videosRoutes = videosRoutes;
const videosRepository = new VideosRepositories_1.VideoRepository();
videosRoutes.post('/create-video', login_1.login, (request, response) => {
    videosRepository.create(request, response);
});
videosRoutes.get('/get-videos', (request, response) => {
    videosRepository.getVideos(request, response);
});
videosRoutes.get('/serach', (request, response) => {
    videosRepository.serachVideos(request, response);
});
