class Recipe {

    constructor(nameRecipe, listOfIng, infoOfPreparation, cookingTime) {

        this.nameRecipe = nameRecipe;
        this.listOfIng = listOfIng;
        this.infoOfPreparation = infoOfPreparation;
        this.cookingTime = cookingTime;
    }

    isValid() {

        return String(this.nameRecipe) && Array(this.listOfIng) && String(this.infoOfPreparation) && Number(this.cookingTime)
    }
}

class BookOfRecipes {

    arrRecipe = [];

    addRecipe(recipe) {
        {
            if (recipe.isValid()) {
                this.arrRecipe.push(recipe)
            }
        }
    }


    recipesByTime(time) {

        const recipesRecipes = [];

        for (let i = 0; i < this.arrRecipe.length; i++) {

            if (this.arrRecipe[i].cookingTime <= time) {

                recipesRecipes.push(this.arrRecipe[i])
            }
        }
        return recipesRecipes
    }

    recipesByIngredients(ingredients) {

        const matchingRecipes = [];


        for (let i = 0; i < this.arrRecipe.length; i++) {


            const recipeIngredients = this.arrRecipe[i].listOfIng;


            let foundAllIngredients = true;

            for (let j = 0; j < ingredients.length; j++) {

                if (!recipeIngredients.includes(ingredients[j])) {

                    foundAllIngredients = false;

                    break;
                }
            }
            if (foundAllIngredients) {

                matchingRecipes.push(this.arrRecipe[i]);
            }

        }
        return matchingRecipes;

    }


}

const itemRecipe = new Recipe('name', ['морква', 'цибуля', 'мука'], 'info', 30);
const itemRecipe2 = new Recipe('name11', ['морква', 'картопля', 'цибуля', 'мука'], 'info11', 60);
const itemRecipe3 = new Recipe('name22', ['морква', 'картопля', 'цибуля', 'мука'], 'info11', 120);

const itemRecipe4 = new Recipe('name44', ['цибуля', 'мука'], 'info11', 20);
const itemRecipe5 = new Recipe('name55', ['картопля', 'цибуля', 'мука'], 'info11', 20);
const itemRecipe6 = new Recipe('name66', ['морква', 'картопля', 'цибуля', 'мука'], 'info11', 20);

const itemRecipeInValid = new Recipe('nameInValid', 'морква', 'цибуля', 'мука', 'info', 30);


const bookOfRecipes = new BookOfRecipes();


bookOfRecipes.addRecipe(itemRecipe);
bookOfRecipes.addRecipe(itemRecipe2);
bookOfRecipes.addRecipe(itemRecipe3);
bookOfRecipes.addRecipe(itemRecipe4);
bookOfRecipes.addRecipe(itemRecipe5);
bookOfRecipes.addRecipe(itemRecipe6);
bookOfRecipes.addRecipe(itemRecipeInValid);


console.log(bookOfRecipes);
console.log(bookOfRecipes.recipesByTime(60).map(x => x.nameRecipe).join(','));
console.log(bookOfRecipes.recipesByIngredients(['картопля', 'морква']).map(x => x.nameRecipe).join(','));