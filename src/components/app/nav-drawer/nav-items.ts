interface NavItemData {
    name: string,
    icon: string,
    link: string
}

function bn(name: string, icon: string, link: string): NavItemData {
    return {name, icon, link}
}

const draft     = bn('Draft Complaint', 'mdi-file-document-edit', '')
const create    = bn('New Complaint', 'mdi-file-plus', '')
const approve   = bn('Approve Complaint', 'mdi-file-certificate', '')
const forward   = bn('Forward Complaint', 'mdi-file-certificate', '')
const accept    = bn('Accept Complaint', 'mdi-file-document-edit', '')
const submit    = bn('Submit Complaint', 'mdi-file-document-edit', '')
const solved    = bn('Solved Complaint', 'mdi-file-document-edit', '')
const reject    = bn('Rejected Complaint', 'mdi-file-document-edit', '')
const find      = bn('Find Complaint', 'mdi-file-document-edit', '')
const users     = bn('User Account', 'mdi-account', '')
const div       = bn('Divisional Offices', 'mdi-office-building', '/app/utils/divisions')
const gn        = bn('G.N Offices', 'mdi-home', '/app/utils/gn-offices')

export const admin = [
    find,
    users,
    div,
    gn
]

export const dis_officer = [
    draft,
    create,
    forward
]

export const dis_sec = [
    approve
]

export const div_officer = [

]

export const div_sec = [

]