export const trending = (req, res) => res.send("Trending Stories");
export const fresh = (req, res) => res.send("New Stories");

export const stories = (req, res) => {
    return res.send(`Your Story is #${req.params.id}`);
};
export const edit = (req, res) => {
    return res.send (`Edit Your Story #${req.params.id}`);
};
export const remove = (req, res) => {
    return res.send (`Delete Your Story #${req.params.id}`);
};