class Post < ActiveRecord::Base
  attr_accessible :content,:poster
 
  validates :content,:presence=>:ture
end
