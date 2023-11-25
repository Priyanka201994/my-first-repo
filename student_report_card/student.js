function StudentDetail(name, roll_no, cls,section)
{
    this.name=name
    this.rollNumber=roll_no
    this.class=cls
    this.section=section
    this.marksOfFiveSubjects=function(science, maths, social_science, english,hindi)
    {
        this.science=science
        this.maths=maths
        this.socialScience=social_science
        this.english=english
        this.hindi=hindi
    }
    this.printTop3=function()
    {
        var arr=[this.science,this.maths,this.socialScience,this.english,this.hindi]
        var subject=["science","maths","socialScience","english","hindi"]
        for(let i=0;i<arr.length;i++)
        {
            for(let j=0;j<arr.length-1-i;j++)
            {
                if(arr[j]<arr[j+1])
                {
                    let temp=arr[j]
                    arr[j]=arr[j+1]
                    arr[j+1]=temp
                    let tempo=subject[j]
                    subject[j]=subject[j+1]
                    subject[j+1]=tempo
                    
                }
            }
        }
        console.log("Top 3 subjects")
        console.log(subject[0],subject[1],subject[2])

    }
    this.printReportCard=function()
    {
        console.log("+---------------------------+")
        console.log("|         REPORT CARD       |")
        console.log("+---------------------------+")
        console.log("| Name    -",this.name,"       |")
        console.log("| Roll No.-",this.rollNumber,"             |")
        console.log("| Class   -",this.class,"              |")
        console.log("| section -",this.section,"              |")
        console.log("| science -",this.science,"             |")
        console.log("| maths   -",this.maths,"             |")
        console.log("| S.Sc    -",this.socialScience,"             |")
        console.log("| english -",this.english,"             |")
        console.log("| Hindi   -",this.hindi,"             |")
        let per=(this.science+this.maths+this.socialScience+this.english+this.hindi)/5
        console.log("| percent -",per,"             |")
        console.log("+---------------------------+")

    }
}
let p=new StudentDetail("Priyanka",23,"x","A")
p.marksOfFiveSubjects(92,94,90,93,86)
p.printTop3()
p.printReportCard()