function solution(D) {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var check ={}; //for checking whether a day is present in the dictionary
    var ans = {}; //the final answer

    //initialize "check" and "ans"
    days.forEach(day=>{
        check[day] = false;
        ans[day] = 0;
    });

    Object.keys(D).forEach((key)=>{
        //constructing a date object
        const parts = key.split('-');
        const myDate = new Date(parts[0], parts[1] - 1, parts[2]);

        const day = days[myDate.getDay()]; //using "days" to get the day on this date

        check[day] = true; //this day is present in the dictionary
        ans[day] += D[key]; //updating "ans"
    });

    //checking for missing days
    days.forEach((day, index)=>{
        if(!check[day]){
            //if it is saturday then simply take mean of the values of friday and sunday 
            if(index===6) ans[day] = (ans[days[5]]+ans[days[0]])/2;
            else{
                const prev = index-1; //the previous day will always have a value as the process is being done iteratively
                
                //the next day which has a value 
                //in the worst case, this would be "Sun";                
                let next = index+1;
                while(!check[days[next]]) next = next===6 ? 0 : next+1;

                //calculating difference between "next" and "prev"
                const diff = next===0
                    ? 7 - prev //if next is "Sun" then difference is calculated using 7 
                    : next - prev; 

                //taking weighted mean of the values of "next" and "prev" and updating "ans"                
                ans[day] = ((diff - 1) * ans[days[prev]] + ans[days[next]]) / diff;
            }

            check[day] = true; //this day has a value now so it is checked
        }
    });

    return ans;
}

module.exports = solution;