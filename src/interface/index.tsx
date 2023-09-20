interface Button {
    btnClass?: string,
    title: string,
    onClick?: () => void
}

interface Progress {
    progress: number
}

interface ArrayType {
    map: Function
}

interface AuthInterface {
    clientId: string,
    clientSecret: string
}

interface Folder {
    parentId: any
}