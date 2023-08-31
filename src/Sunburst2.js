import { ResponsiveSunburst } from "@nivo/sunburst";

const data = {
  name: "nivo",
  color: "hsl(294, 70%, 50%)",
  children: [
    {
      name: "unique users",

      children: [
        {
          name: "every day",
          color: "hsl(294, 70%, 50%)",
          loc: 50
        },
        {
          name: "twice",
          color: "hsl(55, 70%, 50%)",
          loc: 25
        },
        {
          name: "one",
          color: "hsl(261, 70%, 50%)",
          loc: 25
        }
      ]
    }
  ]
};

const data2 = {
  name: "nivo",
  color: "hsl(262, 70%, 50%)",
  children: [
    {
      name: "viz",
      color: "hsl(124, 70%, 50%)",
      children: [
        {
          name: "stack",
          color: "hsl(109, 70%, 50%)",
          children: [
            {
              name: "cchart",
              color: "hsl(241, 70%, 50%)",
              loc: 80930
            },
            {
              name: "xAxis",
              color: "hsl(157, 70%, 50%)",
              loc: 121414
            },
            {
              name: "yAxis",
              color: "hsl(67, 70%, 50%)",
              loc: 105771
            },
            {
              name: "layers",
              color: "hsl(148, 70%, 50%)",
              loc: 9569
            }
          ]
        },
        {
          name: "ppie",
          color: "hsl(264, 70%, 50%)",
          children: [
            {
              name: "chart",
              color: "hsl(118, 70%, 50%)",
              children: [
                {
                  name: "pie",
                  color: "hsl(293, 70%, 50%)",
                  children: [
                    {
                      name: "outline",
                      color: "hsl(22, 70%, 50%)",
                      loc: 4739
                    },
                    {
                      name: "slices",
                      color: "hsl(350, 70%, 50%)",
                      loc: 162649
                    },
                    {
                      name: "bbox",
                      color: "hsl(342, 70%, 50%)",
                      loc: 71774
                    }
                  ]
                },
                {
                  name: "donut",
                  color: "hsl(352, 70%, 50%)",
                  loc: 190904
                },
                {
                  name: "gauge",
                  color: "hsl(206, 70%, 50%)",
                  loc: 71460
                }
              ]
            },
            {
              name: "legends",
              color: "hsl(298, 70%, 50%)",
              loc: 14572
            }
          ]
        }
      ]
    },
    {
      name: "colors",
      color: "hsl(23, 70%, 50%)",
      children: [
        {
          name: "rgb",
          color: "hsl(151, 70%, 50%)",
          loc: 119113
        },
        {
          name: "hsl",
          color: "hsl(35, 70%, 50%)",
          loc: 181359
        }
      ]
    },
    {
      name: "utils",
      color: "hsl(9, 70%, 50%)",
      children: [
        {
          name: "randomize",
          color: "hsl(55, 70%, 50%)",
          loc: 183804
        },
        {
          name: "resetClock",
          color: "hsl(179, 70%, 50%)",
          loc: 63055
        },
        {
          name: "noop",
          color: "hsl(325, 70%, 50%)",
          loc: 137592
        },
        {
          name: "tick",
          color: "hsl(231, 70%, 50%)",
          loc: 123233
        },
        {
          name: "forceGC",
          color: "hsl(193, 70%, 50%)",
          loc: 10627
        },
        {
          name: "stackTrace",
          color: "hsl(308, 70%, 50%)",
          loc: 151208
        },
        {
          name: "dbg",
          color: "hsl(261, 70%, 50%)",
          loc: 134399
        }
      ]
    },
    {
      name: "generators",
      color: "hsl(174, 70%, 50%)",
      children: [
        {
          name: "address",
          color: "hsl(305, 70%, 50%)",
          loc: 64090
        },
        {
          name: "city",
          color: "hsl(204, 70%, 50%)",
          loc: 191736
        },
        {
          name: "animal",
          color: "hsl(201, 70%, 50%)",
          loc: 67681
        },
        {
          name: "movie",
          color: "hsl(272, 70%, 50%)",
          loc: 121640
        },
        {
          name: "user",
          color: "hsl(190, 70%, 50%)",
          loc: 166706
        }
      ]
    },
    {
      name: "set",
      color: "hsl(294, 70%, 50%)",
      children: [
        {
          name: "clone",
          color: "hsl(195, 70%, 50%)",
          loc: 110562
        },
        {
          name: "intersect",
          color: "hsl(221, 70%, 50%)",
          loc: 77866
        },
        {
          name: "merge",
          color: "hsl(109, 70%, 50%)",
          loc: 81157
        },
        {
          name: "reverse",
          color: "hsl(192, 70%, 50%)",
          loc: 186570
        },
        {
          name: "toArray",
          color: "hsl(305, 70%, 50%)",
          loc: 122156
        },
        {
          name: "toObject",
          color: "hsl(67, 70%, 50%)",
          loc: 108988
        },
        {
          name: "fromCSV",
          color: "hsl(256, 70%, 50%)",
          loc: 154028
        },
        {
          name: "slice",
          color: "hsl(61, 70%, 50%)",
          loc: 48674
        },
        {
          name: "append",
          color: "hsl(61, 70%, 50%)",
          loc: 72252
        },
        {
          name: "prepend",
          color: "hsl(232, 70%, 50%)",
          loc: 69776
        },
        {
          name: "shuffle",
          color: "hsl(216, 70%, 50%)",
          loc: 157648
        },
        {
          name: "pick",
          color: "hsl(9, 70%, 50%)",
          loc: 88738
        },
        {
          name: "plouc",
          color: "hsl(114, 70%, 50%)",
          loc: 29265
        }
      ]
    },
    {
      name: "text",
      color: "hsl(170, 70%, 50%)",
      children: [
        {
          name: "trim",
          color: "hsl(169, 70%, 50%)",
          loc: 149355
        },
        {
          name: "slugify",
          color: "hsl(55, 70%, 50%)",
          loc: 132950
        },
        {
          name: "snakeCase",
          color: "hsl(261, 70%, 50%)",
          loc: 138326
        },
        {
          name: "camelCase",
          color: "hsl(17, 70%, 50%)",
          loc: 122587
        },
        {
          name: "repeat",
          color: "hsl(31, 70%, 50%)",
          loc: 80248
        },
        {
          name: "padLeft",
          color: "hsl(290, 70%, 50%)",
          loc: 139650
        },
        {
          name: "padRight",
          color: "hsl(127, 70%, 50%)",
          loc: 164925
        },
        {
          name: "sanitize",
          color: "hsl(206, 70%, 50%)",
          loc: 26413
        },
        {
          name: "ploucify",
          color: "hsl(11, 70%, 50%)",
          loc: 163733
        }
      ]
    },
    {
      name: "misc",
      color: "hsl(40, 70%, 50%)",
      children: [
        {
          name: "greetings",
          color: "hsl(54, 70%, 50%)",
          children: [
            {
              name: "hey",
              color: "hsl(215, 70%, 50%)",
              loc: 151766
            },
            {
              name: "HOWDY",
              color: "hsl(328, 70%, 50%)",
              loc: 154472
            },
            {
              name: "aloha",
              color: "hsl(82, 70%, 50%)",
              loc: 57532
            },
            {
              name: "AHOY",
              color: "hsl(178, 70%, 50%)",
              loc: 90618
            }
          ]
        },
        {
          name: "other",
          color: "hsl(40, 70%, 50%)",
          loc: 178749
        },
        {
          name: "path",
          color: "hsl(51, 70%, 50%)",
          children: [
            {
              name: "pathA",
              color: "hsl(209, 70%, 50%)",
              loc: 168586
            },
            {
              name: "pathB",
              color: "hsl(123, 70%, 50%)",
              children: [
                {
                  name: "pathB1",
                  color: "hsl(103, 70%, 50%)",
                  loc: 12433
                },
                {
                  name: "pathB2",
                  color: "hsl(89, 70%, 50%)",
                  loc: 76351
                },
                {
                  name: "pathB3",
                  color: "hsl(125, 70%, 50%)",
                  loc: 19795
                },
                {
                  name: "pathB4",
                  color: "hsl(254, 70%, 50%)",
                  loc: 189753
                }
              ]
            },
            {
              name: "pathC",
              color: "hsl(248, 70%, 50%)",
              children: [
                {
                  name: "pathC1",
                  color: "hsl(188, 70%, 50%)",
                  loc: 189834
                },
                {
                  name: "pathC2",
                  color: "hsl(53, 70%, 50%)",
                  loc: 117606
                },
                {
                  name: "pathC3",
                  color: "hsl(146, 70%, 50%)",
                  loc: 26419
                },
                {
                  name: "pathC4",
                  color: "hsl(70, 70%, 50%)",
                  loc: 192575
                },
                {
                  name: "pathC5",
                  color: "hsl(37, 70%, 50%)",
                  loc: 89602
                },
                {
                  name: "pathC6",
                  color: "hsl(254, 70%, 50%)",
                  loc: 176477
                },
                {
                  name: "pathC7",
                  color: "hsl(347, 70%, 50%)",
                  loc: 168653
                },
                {
                  name: "pathC8",
                  color: "hsl(44, 70%, 50%)",
                  loc: 56582
                },
                {
                  name: "pathC9",
                  color: "hsl(167, 70%, 50%)",
                  loc: 194779
                }
              ]
            }
          ]
        }
      ]
    }
  ]
};

const Sunburst = ({ info }) => {
  return (
    <div style={{ width: "500px", height: "500px" }}>
      <ResponsiveSunburst
        data={info}
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        id="name"
        value="loc"
        colors={{ scheme: "nivo" }}
        enableArcLabels={true}
        arcLabel="id"
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 1.4]]
        }}
      />
    </div>
  );
};
