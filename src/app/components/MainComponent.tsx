import Member from "./Member";



export default function MainComponent(){
    const teamMembers = [
        {
            name: "Alice Smith",
            role: "Project Manager",
            email: "alice.smith@example.com"
        },
        {
            name: "Bob Johnson",
            role: "Software Developer",
            email: "bob.johnson@example.com"
        },
        {
            name: "Charlie Brown",
            role: "UX Designer",
            email: "charlie.brown@example.com"
        },
        {
            name: "Diana Prince",
            role: "QA Engineer",
            email: "diana.prince@example.com"
        },
        {
            name: "Ethan Hunt",
            role: "DevOps Engineer",
            email: "ethan.hunt@example.com"
        }
    ];
    
    return (
        <div className="p-8 rounded border grid gap-3">
            {teamMembers.map((member => (
                <Member key={member.email} name={member.name} role={member.role} email={member.email} />
            )))}
        </div>
    )
}