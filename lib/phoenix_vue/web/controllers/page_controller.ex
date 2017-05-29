defmodule PhoenixVue.Web.PageController do
  use PhoenixVue.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
