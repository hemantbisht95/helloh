var storyModel = require('./../models/story');

exports.getstory=function(req,res)
{
storyModel.find({},function(err,data)
{
	          if(err)
	      {
		     res.json({code:400,message:"error"})
		     
          }
 
	     	else
        {

	   			res.json({code:200,message:" record found",data:data})
	    }
})
}


exports.getstorybyid=function(req,res)
{
	console.log(req.params.id);
  	storyModel.find({_id:req.params.id},function(err,data)
   {
	          if(err)
	      {
		     res.json({code:400,message:"error"});
		     
          }
 
	     	else
           {
	   			res.json({code:200,message:" record found",data:data});
	       }
    })
}

exports.addstory=function(req,res)
{
          var story =new storyModel(req.body);
          story.save(function(err,data)

    {

	           if(err)
	       {
  
		        res.json({code:400,message:"error"})
	       }
	               else
	           {

		             res.json({code:200,message:"created",data:data})
	           }
    })

}
exports.removestory=function(req,res)
{
	storyModel.remove({_id:req.params.id},function(err,data)
{
	if(err){
		res.json({code:400,message:"no record deleted"});
	}
	else{
		res.json({code:200,message:"data deleted",data:data});
	}
})		
}
exports.updatestory =function(req,res){
	storyModel.update({_id:req.params.id},{$set:req.body},function(err,data)
	{
		if(err){
		res.json({code:400,message:"no record updated"});
	
	}else{
		res.json({code:200,message:"data updated",data:data});
	}
})
}
