


type Member = {
    name: string , 
    role: string,
    email: string
}

export default function Member({name  , role , email}: Member){
    <div className="rounded border flex flex-col gap-3">
        <h2 className="text-md">{name}</h2>
        <p className="text-sm">{role}</p>
        <p className="text-sm">{email}</p>
    </div>
}