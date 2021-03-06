

const TOPIC_STATE = {
    page: 1,
    limit: 20,
    list: [],
    topicinfo: {},
    replies: []

}

export default function topic(prestate = TOPIC_STATE, action) {
    switch (action.type) {
        case 'getTopicList':
            return {
                ...prestate, list: action.list, page: 1
            }
        case 'appendTopicList':
            return { ...prestate, list: prestate.list.concat(action.list), page: action.page }
        case 'getTopicInfo':
            return { ...prestate, replies:action.infoData.replies,topicinfo:{...action.infoData, replies:null}}
        default:
            return { ...prestate }
    }
}
