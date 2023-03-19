// 
// Handle of author
// content, 
// An image link posted by the author of the post
// Number of views, 
// Number of likes, 

//Construtor Notation (Syntax)
const InstagramPost = new Object();
InstagramPost.handleOfAuthor= '@davido';
InstagramPost.content = 'Musician/Band';
InstagramPost.imageLink = 'https://www.instagram.com/p/CmWwxQrPa1T/?hl=en'
InstagramPost.numberOfViews = 1422583;
InstagramPost.numberOfLikes =  1422583;
 

 
console.log(InstagramPost);

// Musa Dawodu is a 19 years old Nigerian male who lives with his parents in Lekki, Lagos State. Recently, he wrote the JAMB exam and had the following scores in his combination:
// ENG - 70
// GOVT - 85
// LIT - 82
// CRK - 94

// Using the factory method, implement a createPerson() factory function that takes name, age and location as arguments. Afterwards, create an object representing Musa from the factory function. 
// Also, implement a factory function createJambScores() that takes eng, govt, lit, crk as arguments. Then create an object representing Muse’s JAMB scores. Add the object as a property to Musa object you created above in (a) above

 
//Factory Method/Function
function createPerson(name, age, location){
    return{
       name : name,
        age: age,
        location: location,
    }
}

const person = createPerson('Musa Dawodu' , '19 years old' , 'Lekki, Lagos State');
 
console.log(person)




function createJambScores (crk, govt, eng, lit  )
{
     
    return{
    crk : crk,
    govt : govt,
    eng : eng,
    lit : lit
    }
   
}
const person2 = createJambScores('94' , '85' , '70', '82');
console.log(person2);

// What are the different ways you can clone an object? Give examples for each of them.
// Shallow cloning 
// Deep cloning

 

 