import express from 'express';
import {
    watch,
    getEdit,
    postEdit,
    getUpload,
    postUpload,
    deleteVideo,
    upload,    
} from '../controllers/videoController.js';

const videoRouter = express.Router();

videoRouter.get('/:id(\\d+)', watch);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
// videoRouter.get("/upload",getUpload);
// videoRouter.post("/upload",postUpload);
// 아래 한 줄로 위의 두 줄을 요약!
videoRouter.route("/upload").get(getUpload).post(postUpload);

export default videoRouter;
