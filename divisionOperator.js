/*
* Justin Rodriquez
* Division is the inverse of multiplication. Multiplication (x * y) can be broken down into adding x to itself y times Ex: 5 * 3 = 5 + 5 + 5
*/
function divisionOperation(num, dom)
{
    if (dom == 0)
    {
        return "Undefined";
    }
    else if (num == 0)
    {
        return 0;
    }
    else
    {
        var count = 0, rem = num;
        
        while (dom <= rem)
        {
            count += 1;
            rem -= dom;
        }

        return count + " with a remainder of " + rem;
    }
}