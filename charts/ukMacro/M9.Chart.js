var ChartM9 =

{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",

  "description": "(M9) PNFC bond rate",

   "title": {
    "text": "Corporate bond rate",
    "subtitle":"Monthly average, PNFC new depositis. Source: BoE",
    "subtitleFontStyle":"italic",
    "subtitleFontSize":10,
    "anchor": "start",
    "color": "black"
  },
  
  "data": {
    "url": "https://raw.githubusercontent.com/RDeconomist/RDeconomist.github.io/main/charts/ukMacro/M9.DataHub.Monetary.PNFCRate.csv"},
  "height": 300,
  "width": 310,
  
  "encoding": {"x": {"field": "Date", "type": "temporal", "axis": {"title":null, "grid": false}}},

  "layer": [

    {"encoding": {

        "y": {"field": "Value", 

              "type": "quantitative", 
              "title":"",
              "scale": {"domain": [0, 7]},
               "axis": {"grid": false}
              }
            },

        
        "layer": [{"mark": {"type": "line", "color": "darkblue"}},

                  {"transform": 

                      [{"filter": {"selection": "hover"}}], 

                        "mark": "point"}

      ]

    },

    {"mark": "rule", 

      "encoding": {
        "opacity": {
          "condition": {"value": 0.1, "selection": "hover"},
          "value": 0
        },

        "tooltip": [

          {"field": "Date", "type": "temporal", "format":"%B, %Y"},
          {"field": "Value", "title": "Bond rate", "type": "quantitative", "format": ""}

        ]

      },


      
      "selection": {
        "hover": {
          "type": "single",
          "fields": ["Date"],
          "nearest": true,
          "on": "mouseover",
          "empty": "none",
          "clear": "mouseout"

        }

      }

    }

  ]

};


vegaEmbed('#ChartM9', ChartM9, {"actions": false});