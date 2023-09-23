import { Router } from "express";
import { VideoRepository } from "../modules/videos/repositories/VideosRepositories";
import { login } from '../middleware/login'

const videosRoutes = Router();
const videosRepository = new VideoRepository();

videosRoutes.post('/create-video', login, (request, response) => {
    videosRepository.create(request, response);
})

videosRoutes.get('/get-videos', (request, response) => {
    videosRepository.getVideos(request, response);
})

videosRoutes.get('/serach', (request, response) => {
    videosRepository.serachVideos(request, response);
})

export { videosRoutes };