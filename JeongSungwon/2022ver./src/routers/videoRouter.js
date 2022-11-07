import express from "express"

const videoRouter = express.Router();

const handleWathchVideo = (req, res) => res.send("Watch Video");

videoRouter.get("/watch", handleWathchVideo);

export default videoRouter;
