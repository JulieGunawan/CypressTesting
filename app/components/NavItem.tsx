import Link from "next/link"

export default function NavItem({label,path, dataTest}:{label: string, path: string, dataTest: string}){
    return (
        <Link href={path} data-test={dataTest}>
            {label}
        </Link>
    )
}