
test("check sum of 2 number",()=>{
    expect(sum(2,3)).toBe(5);
    //expect(sum(-2,3)).toBe(1);
    //expect(sum()).toBe("Please check arguments");
})

export  const sum = (a,b)=> a+b;