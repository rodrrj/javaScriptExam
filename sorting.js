/*
* Justin Rodriquez
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
* Demo with integers appear to sort 1 and 100000 before 21, not the best case for integer ids when order of ids matters
* Will need to expand upon the sort for proper handling of 1, 100000, and 21 such that their sorted order would be 1, 21, and 100000
* Unspecified for ascending/descending, allow function to alternate between two sort orders; format for function could be function("key", "a (or d)")
*/

var testing = [
    { id : 1, name : "testUser" },
    { id : 7, name : "Justin Rodriquez" },
    { id : 3, name : "Anna Anderson" },
    { id : 4, name : "Hazel Anderson" },
    { id : 10, name : "Justin Conrad" },
    { id : 2, name : "Blake Zulu" },
    { id : 5, name : "Collie Phillips" },
    { id : 8, name : "Iron Man" },
    { id : 6, name : "Captain America" },
    { id : 9, name : "Bruce Willis" }
];

function customSort(key, order) // order: a = ascending; z = descending | key: id or name
{
    return function(index1, index2)
    {
        if (order.toLowerCase() == "z")
        {
            return index2[key].toString().localeCompare(index1[key], undefined, {numeric: true});
        }
        else // Incorrect order input will default to ascending sort order
        {
            return index1[key].toString().localeCompare(index2[key], undefined, {numeric: true});
        }
    }
}

testing.sort(customSort("name", "a")); 

for (var i = 0; i < testing.length; i++)
{
    console.log(testing[i].name);
}