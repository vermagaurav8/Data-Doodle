interface Button {
    btnClass?: string,
    title: string,
    onClick?: () => void
}

interface Progress {
    progress: number
}

interface ArrayType<T> {
    map: (callback: (value: T, index: number, array: T[]) => any) => any[];
}

interface AuthInterface {
    clientId: string,
    clientSecret: string
}

interface Folder {
    parentId: any
}