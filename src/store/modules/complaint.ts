import {ActionTree, GetterTree, Module, MutationTree} from "vuex";
import {RootState} from "@/store";
import {api} from "@/api";

interface Complaint {
    complaintId: string,
    refNo: string,
    type: string,
    customerId: string,
    subject: string,
    description: string,
    status: string,
    createdDate: Date,
    assignedDiv: string,
    assignedBy: string,
    assignedDate: Date
}

export interface ComplaintState {
    drafts: Array<Complaint>
    awaitingApproval: Array<Complaint>
    approved: Array<Complaint>
    awaitingAccept: Array<Complaint>
    inProgress: Array<Complaint>
}

const state: ComplaintState = {
    drafts: [],
    awaitingApproval: [],
    approved: [],
    awaitingAccept: [],
    inProgress: []
}

const mutations: MutationTree<ComplaintState> = {}

export const actions: ActionTree<ComplaintState, RootState> = {
    async LOAD_DraftComplaints(store) {
        const [complaints, status] = await api.complaint.getComplaints({status: 'Draft'})
        if (status.code == 200) {
            store.state.drafts = complaints || []
        }
        return status;
    },
    async LOAD_AwaitingApprovalComplaints(store) {
        const [complaints, status] = await api.complaint.getComplaints({status: 'Awaiting Approval'})
        if (status.code == 200) {
            store.state.awaitingApproval = complaints || []
        }
        return status;
    },
    async LOAD_ApprovedComplaints(store) {
        const [complaints, status] = await api.complaint.getComplaints({status: 'Approved'})
        if (status.code == 200) {
            store.state.approved = complaints || []
        }
        return status;
    },
    async LOAD_AwaitingAccept(store) {
        const [complaints, status] = await api.complaint.getComplaints({status: 'Awaiting Accept'})
        if (status.code == 200) {
            store.state.awaitingAccept = complaints || []
        }
        return status;
    },
    async LOAD_InProgress(store) {
        const [complaints, status] = await api.complaint.getComplaints({status: 'In Progress'})
        if (status.code == 200) {
            store.state.inProgress = complaints || []
        }
        return status;
    }
}

export const complaint_module: Module<ComplaintState, RootState> = {
    namespaced: true,
    state,
    mutations,
    actions
}