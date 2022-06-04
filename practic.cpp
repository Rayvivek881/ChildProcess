#include<bits/stdc++.h>
using namespace std;
class Solution {
public:
    int longestValidParentheses(string s) {
        int result = 0;
        vector<pair<int, char>> lst;
        lst.push_back({-1, '0'});
        for(int i = 0; i < s.size(); i++) {
            if (s[i] == '(')
                lst.push_back({i, s[i]});
            else if (lst.size() && lst.back().second == '(')
                lst.pop_back();
            else lst.push_back({i, '0'});
            if (lst.back().first != 1)
                result = max(result,  i - lst.back().first + 1);
        }
        return result;
    }
};
int main(int argc, char const *argv[])
{
    Solution obj;
    obj.longestValidParentheses(")(((((()())()()))()(()))(");
    return 0;
}
