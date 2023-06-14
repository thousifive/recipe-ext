const HOST =
  "https://master-7rqtwti-yj2le3kr2yhmu.uk-1.platformsh.site/";

const getTotalRecipes = async () => {
  try {
    const response = await fetch(`${HOST}yumazoo/recipes/number`);
    const { message, detail } = await response.json();
    if(message) return message;
    alert("Error, "+(detail && JSON.stringify(detail)))
    return undefined;
  } catch (e) {
    console.error(e);
  }
};

const getRecipes = async() => {
  try {
    const response = await fetch(`${HOST}yumazoo/recipes`);
    const { message, detail } = await response.json();
    if(message) {
      return message;
    }
    else {
      alert("Unable to load recipes, "+(detail && JSON.stringify(detail)));
      return undefined;
    }
  } catch (e) {
    alert(JSON.stringify(e));
    console.error(e);
  }
}

const getRecipeById = async(id) => {
  try {
    const response = await fetch(`${HOST}yumazoo/recipes/${id}`);
    const {message, detail} = await response.json();
    if(message) return message;
    else {
      alert(JSON.stringify(detail));
      return undefined;
    }
  } catch(e) {
    console.error(e)
  }
}

const addRecipe = async (recipe) => {
  let done = false;
  try {
    const response = await fetch(`${HOST}yumazoo/recipes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recipe),
    });
    const { message, detail } = await response.json();
    if(message) {
      done = true;
      alert(message);
    }
    else {
      done = false;
      alert("Failed adding recipe, "+detail[0].loc[1]+": "+detail[0].msg);
    }
    
  } catch (e) {
    done = false;
    alert(JSON.stringify(e.detail))
    console.error(e);
  }
  return done;
};

export {getTotalRecipes, getRecipes, getRecipeById, addRecipe};