const errorHandler = (err, req, res, next) => {
    if(err.status){
        res.status(err.status).json({msg: err.message});
    }else{
        res.status(404).json({msg: err.message});
    }
    
};

export default errorHandler;