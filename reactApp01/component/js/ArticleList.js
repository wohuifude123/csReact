class ArticleList extends React.component{

    render() {
        /*
            let [foo, [[bar], baz]] = [1, [[2], 3]];
            foo // 1
            bar // 2
            baz // 3

            let [ , , third] = ["foo", "bar", "baz"];
            third // "baz"

            let [x, , y] = [1, 2, 3];
            x // 1
            y // 3

            let [head, ...tail] = [1, 2, 3, 4];
            head // 1
            tail // [2, 3, 4]

            let [x, y, ...z] = ['a'];
            x // "a"
            y // undefined
            z // []
         */
        const { articles, isFetching } = this.props;
        const articleNodes = [];
        /*
            var arr = [1,2,3,4];
            arr.forEach(function(value,index,array){
                array[index] == value;    //结果为true
                sum+=value;
            });
            console.log(sum);    //结果为 10
         */
        articles.forEach(function(article, i){
            if(article.genre == 1){
                //将数据key和article作为属性传递到子组件中
                articleNodes.push(<GridArticle key={i} article={article} />);
            }else{
                articleNodes.push(<GridKeyArticle key={i} article={article} />);
            }
        });

        return (
            <div className="com-article-list">
                {articleNodes}
            </div>
        );
    }
}


//子组件 GridArticle
class GridArticle extends React.Component {
    render() {
        //取出从父组件拿到的数据,这样方便分配和管理
        const { article } = this.props;

        return (
            <Link to="/articles/1" className="com-grid-article clearfix" >
                <div className="grid-article-left">
                    <h2>{article.title}</h2>
                    <div className="ribbon">
                        <span>{article.source}</span>
                        <span className="iconfont icon-praise">{article.praise_count}</span>
                        <span className="iconfont icon-message">{article.comment_count}</span>
                        <span className="smart-date">{Utils.smartDate(article.publish_time)}</span>
                    </div>
                </div>
                <div className="grid-article-right">
                    <img src={article.banner_pic} className="imgcover"/>
                </div>
            </Link>
        );
    }
}
