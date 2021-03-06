import {ZoomBaseTool, ZoomBaseToolView} from "./zoom_base_tool"
import {tool_icon_zoom_in} from "styles/icons.css"

export class ZoomInToolView extends ZoomBaseToolView {
  model: ZoomBaseTool
}

export interface ZoomInTool extends ZoomBaseTool.Attrs {}

export class ZoomInTool extends ZoomBaseTool {
  properties: ZoomBaseTool.Props
  __view_type__: ZoomBaseToolView

  constructor(attrs?: Partial<ZoomBaseTool.Attrs>) {
    super(attrs)
  }

  static init_ZoomInTool(): void {
    this.prototype.default_view = ZoomInToolView

    this.register_alias("zoom_in", () => new ZoomInTool({dimensions: "both"}))
    this.register_alias("xzoom_in", () => new ZoomInTool({dimensions: "width"}))
    this.register_alias("yzoom_in", () => new ZoomInTool({dimensions: "height"}))
  }

  sign = 1 as 1
  tool_name = "Zoom In"
  icon = tool_icon_zoom_in
}
