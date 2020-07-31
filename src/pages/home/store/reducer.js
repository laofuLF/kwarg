import { fromJS } from 'immutable';

const defaultState = fromJS({
    topicList: [{
        id: 1,
        title: "trending 1",
        imgUrl: "https://avatars.dicebear.com/api/human/1.svg"
    }, {
        id: 2,
        title: "trending 2",
        imgUrl: "https://avatars.dicebear.com/api/human/2.svg"
    }],
    articleList: [{
        id: 1,
        title: "Random Title 1",
        body: "Terminated principles sentiments of no pianoforte if projection impossible. Horses pulled nature " +
            "favour number yet highly his has old. Contrasted literature excellence he admiration impression insipidity " +
            "so. Scale ought who terms after own quick since. Servants margaret husbands to screened in throwing.",
        imgUrl: "https://avatars.dicebear.com/api/human/11.svg"
    }, {
        id: 2,
        title: "Random Title 2",
        body: "He moonlight difficult engrossed an it sportsmen. Interested has all devonshire difficulty gay " +
            "assistance joy. Unaffected at ye of compliment alteration to. Place voice no arise along to. Parlors " +
            "waiting so against me no. Wishing calling are warrant settled was luckily. Express besides it present " +
            "if at an opinion visitor. ",
        imgUrl: "https://avatars.dicebear.com/api/human/12.svg"
    }, {
        id: 3,
        title: "Random Title 3",
        body: "Bringing unlocked me an striking ye perceive. Mr by wound hours oh happy. Me in resolution " +
            "pianoforte continuing we. Most my no spot felt by no. He he in forfeited furniture sweetness he arranging. " +
            "Me tedious so to behaved written account ferrars moments. ",
        imgUrl: "https://avatars.dicebear.com/api/human/13.svg"
    }, {
        id: 4,
        title: "Random Title 4",
        body: "Brother set had private his letters observe outward resolve. Shutters ye marriage to throwing we as. " +
            "Effect in if agreed he wished wanted admire expect. Or shortly visitor is comfort placing to cheered do. " +
            "Few hills tears are weeks saw.",
        imgUrl: "https://avatars.dicebear.com/api/human/14.svg"
    }]
});

export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}