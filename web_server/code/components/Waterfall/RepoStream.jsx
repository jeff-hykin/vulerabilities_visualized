const getRepoData = require("../Waterfall/getRepoData")
const RepoBubble = require("../Waterfall/RepoBubble")

// just get the data, and create an element for each
module.exports = async ()=>{
    const RepoData = await getRepoData()
    return RepoData.map(eachRepo=>{
        let repoBubble = RepoBubble({ eachRepo })
        // attach the data
        repoBubble.data = eachRepo
        repoBubble.originalDisplay = repoBubble.style.display
        return repoBubble
    })
}