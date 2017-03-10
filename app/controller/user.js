var userModel = require('./../models/user');

exports.getuser=function(req,res)
{
userModel.find({},function(err,data)
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


exports.getuserbyid=function(req,res)
{
	console.log(req.params.id);
  	userModel.find({_id:req.params.id},function(err,data)
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

	exports.adduser=function(req,res)
			{
			var user =new userModel(req.body);
				user.save(function(err)
				{
				if(err)
				{

				res.json({code:400,message:"error"})
				}
			    else
				    {
				     res.json({code:200,message:"created",data:user})
				}
			})
		}
	exports.removeuser=function(req,res)
		{
		userModel.remove({_id:req.params.id},function(err,data)
		{
		if(err){
			res.json({code:400,message:"no record deleted"});
		}
		else{
			res.json({code:200,message:"data deleted",data:data});
		}
     })		
   }
	exports.updateuser =function(req,res){
		userModel.update({_id:req.params.id},{$set:req.body},function(err,data)
			{
		    if(err){
				    res.json({code:400,message:"no record updated"});
			}
			else{
				res.json({code:200,message:"data updated",data:data});
			}
		})		
	  }
	exports.reguser=function(req,res)
	{
	var user =new userModel(req.body);
	user.save(function(err,data)

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

	exports.login=function(req,res)
			{
			userModel.find({name:req.params.id,password:req.params.id}).exec(function(err,data)
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