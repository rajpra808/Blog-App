import Blog from "../../models/blog";

module.exports = async (req, res) => {
    var blogs=[];
    console.log(req.query.tag);
    await Blog.find({ tags:req.query.tag},'author title description image tags',(err, blogs)=>{
        if (err) {
            return res.status(404).json({
                success: false,
                message: 'Something went Wrong!'
            });
        }
        else{
            return res.status(200).json({
                blogs:blogs
            });
        }
    });
};