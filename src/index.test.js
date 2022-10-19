const solution = require("./index");

//every day present
test("test1", ()=>{
    expect(solution({
        '2020-01-01':4, 
        '2020-01-02':4,
        '2020-01-03':6,
        '2020-01-04':8,
        '2020-01-05':2,
        '2020-01-06':-6,
        '2020-01-07':2,
        '2020-01-08':-2,}))
        .toEqual({
            'Mon': -6,
            'Tue': 2,
            'Wed': 2,
            'Thu': 4,
            'Fri': 6,
            'Sat': 8,
            'Sun': 2
        });
});

//consecutive days missing
test("test2", ()=>{
    expect(solution({
        '2020-01-01':6, 
        '2020-01-04':12,
        '2020-01-05':14,
        '2020-01-06':2,
        '2020-01-07':4}))
        .toEqual({
            "Mon": 2, 
            "Tue": 4, 
            "Wed": 6, 
            "Thu": 8, 
            "Fri": 10, 
            "Sat": 12, 
            "Sun": 14});
});

//non-consecutive days missing
test("test3", ()=>{
    expect(solution({
        '2020-01-02':3,
        '2020-01-05':14,
        '2020-01-06':2}))
        .toEqual({
            'Mon': 2,
            'Tue': 2.3333333333333335,
            'Wed': 2.666666666666667,
            'Thu': 3,
            'Fri': 6.666666666666667,
            'Sat': 10.333333333333334,
            'Sun': 14
        });
});