class PostsController<ApplicationController

  def index
    @posts = Post.order('created_at DESC').all
    @count = @posts.count
    @posts = Kaminari.paginate_array(@posts).page(params[:page]).per(6)
  end
 
  def new
    @post=Post.new
    render posts_path
  end

  def create
    @post=Post.new
    @post.content=params[:content]
    @post.poster=params[:poster]==""? "Anonymous" : params[:poster]
    if @post.save
     res = "success"
    end
    respone_to do |format|
      format.json {render :json =>res.to_json}
    end
  end
  
  def delete
    @post=Post.find(params[:id])
    @post.delete
    render posts_path
  end

end
