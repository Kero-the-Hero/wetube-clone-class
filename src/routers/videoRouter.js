import express from 'express';
import {
    watch,
    getEdit,
    postEdit,
    deleteVideo,
    upload,
} from '../controllers/videoController.js';

const videoRouter = express.Router();

videoRouter.get('/:id(\\d+)', watch);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);


export default videoRouter;
