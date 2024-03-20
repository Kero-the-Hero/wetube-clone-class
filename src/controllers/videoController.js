import Video from "../models/Video";

export const home = (req, res) => {
    console.log("Start");
    Video.find({}, (error,videos) => {
    //     console.log("error", error);
    //     console.log("videos", videos);
    // });
    // console.log("hello");
        console.log("Finished");
        return res.render('home', { pageTitle: 'Home', videos: [] });
    });
    console.log("I finish first");
};
// 위와 같이 기술하면 console.log의 서순은
// Start -> I finish first -> Finished의 순이 된다.
// connection을 하고나서 render 들어가기 때문

export const watch = (req, res) => {
    const { id } = req.params;
    return res.render('watch', { pageTitle: `Watching` });
};
export const getEdit = (req, res) => {
    const { id } = req.params;
    return res.render('edit', { pageTitle: `Editing` });
};
export const postEdit = (req,res) => {
    const { id } = req.params;
    const { title } = req.body;
    return res.redirect(`/videos/${id}`);
};
export const getUpload = (req,res) => {
    return res.render("upload", {pageTitle: "Upload video"});
};
export const postUpload = (req,res) => {
    //Here we will add a video to the videos array.
    const {title} = req.body
    return res.redirect("/");
};