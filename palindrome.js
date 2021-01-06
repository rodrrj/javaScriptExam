/*
* Justin Rodriquez
* Palindrome: a word, phrase, or sequence that reads the same backward as forward
*/
function palindrome(word)
{
    if (word == null || word == "" || word.length == 1)
    {
        return true;
    }
    else
    {
        var flag = true;
        word = word.toLowerCase();

        for (var i = 0; i < word.length / 2; i++)
        {
            if (word.charAt(i) !== word.charAt(word.length - i - 1))
            {
                flag = false;
            }
        }

        return flag;
    }
}

function recursivePalindrome(word)
{
    if (word == null || word == "" || word.length == 1)
    {
        return true;
    }
    else
    {
        if (word.chatAt(0).toLowerCase() !== word.charAt(word.length - 1).toLowerCase())
        {
            return false;
        }
        else
        {
            return recursivePalindrome(word.substring(1, word.length - 2))
        }
    }
}