export interface RecipeType{
    recipe_id: number,
    average_score: number,
    number_of_ratings: number,
    title: string,
    description: string
    is_vegetarian: boolean,
    preparation_time: string,
    servings: number,
    date_published: string,
    image: string,
    isBookMarked:boolean,
    author: number,
    categories: number
  }