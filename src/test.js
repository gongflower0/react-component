import TreeList from './index'


export default function Process(){
    const exampleList=[{
        "id": "Root",
        "children": [
          {
            "id": "Node1",
            "children": [
              {
                "id": "Node1-1",
                "children": [
                  {
                    "id": "Node1-1-1",
                    "children": [
                      { "id": "Node1-1-1-1", "children": [{ "id": "Node1-1-1-1-1" }] }
                    ]
                  },
                  { "id": "Node1-1-2" }
                ]
              }
            ]
          },
          {
            "id": "Node2",
            "children": [
              { "id": "Node2-1" },
              { "id": "Node2-2" },
              { "id": "Node2-3" }
            ]
          },
          {
            "id": "Node3"
          },
          {
            "id": "Node4"
          },
          {
            "id": "Node5"
          }
        ]
      }
      ];

        return (
               <TreeList treeRoot={exampleList}/>
         )    
 }

