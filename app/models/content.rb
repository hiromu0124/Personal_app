class Content < ApplicationRecord
  belongs_to :user
  has_many :answers
  has_many :history
  has_many :content_likes
  # def self.search(search)
  #   if search
  #     Content.where('text LIKE(?)', "%#{search}%")
  #   else
  #     Content.all
  #   end
  # end
end
