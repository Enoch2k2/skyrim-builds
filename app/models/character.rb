class Character < ApplicationRecord
  belongs_to :race

  validates :name, presence: true
end
