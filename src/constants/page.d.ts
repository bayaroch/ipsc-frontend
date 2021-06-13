import { NextPage } from 'next'
import MainLayout from '@/layouts/MainLayout'
// import PlainLayout from '@/layouts/AdminLayout'
import AuthenticationLayout from '@/layouts/LoginLayout'

type PageWithMainLayoutType = NextPage & { Layout?: typeof MainLayout }

// type PageWithPlainLayoutType = NextPage & { Layout?: typeof PlainLayout }

type PageWithAuthLayoutType = NextPage & { Layout?: typeof AuthenticationLayout }

type PageWithLayoutType = PageWithMainLayoutType | PageWithPlainLayoutType | PageWithAuthLayoutType

export default PageWithLayoutType
